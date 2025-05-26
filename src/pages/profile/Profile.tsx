import { useDispatch, useSelector } from "react-redux";
import "./profile.css";
import { AppDispatch, RootState } from "store";
import { jwtDecode } from "jwt-decode";
import { useGetPurchasesQuery } from "../../services/purchaseApi";
import { PurchaseSearch } from "../../types";
import { useEffect, useState } from "react";
import { setLastPurchases } from "../../features/purchase/purchaseSlice";
import Loader from "../../components/loader/Loader";
import Pagination from "../../components/pagination/Pagination";
import Purchase from "../../components/purchasecard/Purchase";

const Profile: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();
  const [page, setPage] = useState(0);
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const token = useSelector((state: RootState) => state.auth.accessToken);

  if (token && isAuthenticated) {
      const decoded = jwtDecode(token);


    if (decoded.role === 'ADMIN') {
      return ( <div className="profile-container">
          <h1>Welcome, <span>{decoded.name} {decoded.surname}</span></h1>
          <h2>Your currency: <span>{decoded.currency}</span></h2></div>);
    } else {
        const purchaseSearch: PurchaseSearch = {
          page: page,
          pageSize: 8,
          order: null,
          orderBy: null,
        };

        const { data, isLoading } = useGetPurchasesQuery(purchaseSearch);
        const [minLoading, setMinLoading] = useState(true);

        useEffect(() => {
          if (data) {
            dispatch(setLastPurchases(data.content));
          }
        }, [data, dispatch]);

        useEffect(() => {
          if (!isLoading) {
            const timer = setTimeout(() => {
              setMinLoading(false);
            }, 350);
            return () => clearTimeout(timer);
          }
        }, [isLoading]);

        const handlePageChange = (newPage: number) => {
          if (data && newPage >= 0 && newPage < data.page.totalPages) {
            setPage(newPage);
          }
        };

        if (isLoading || minLoading) {
          return <Loader />;
        }

        if (!data || data.page.totalContent === 0) {
          return (
            <div className="profile-container">
              <h1>Welcome, <span>{decoded.name} {decoded.surname}</span></h1>
              <h2>Your currency: <span>{decoded.currency}</span></h2>
              <h3>No purchases found.</h3>
            </div>
          );
        }

        return (
          <div className="profile-container">
            <h1>Welcome, <span>{decoded.name} {decoded.surname}</span></h1>
            <h2>Your currency: <span>{decoded.currency}</span></h2>
            <br />
            <div className="purchase-container">
              <h2 className="purchase-title">Your purchases</h2>
              {data.content.map((purchase) => (
                <Purchase purchase={purchase} key={purchase.id} />
              ))}
              <Pagination
                page={data.page.pageNumber}
                totalPages={data.page.totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        );

    }
  }
};

export default Profile;
