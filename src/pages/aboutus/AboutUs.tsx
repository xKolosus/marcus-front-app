import "./aboutus.css"

const AboutUs : React.FC = ({}) => {
  return (
  <div className="about-us-container">
    <div className="about-us-left">
      <h1>Who we are</h1>
      <pre>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aliquam eget porta leo. Proin hendrerit pretium sem at egestas.
        Nam sed odio tristique, feugiat libero eget, mattis urna. Integer vel enim vel nunc fringilla ornare.
        Ut magna ligula, imperdiet non aliquet quis, dignissim a orci.
        Suspendisse vulputate, elit ut pretium egestas, elit risus tincidunt eros, id dignissim justo ex in mi.
        
        Proin rutrum viverra finibus. Nullam vitae dapibus nulla, eget elementum massa.
        Suspendisse placerat felis faucibus, blandit arcu quis, ullamcorper nunc.
        Praesent vitae iaculis elit. Morbi euismod, ipsum at pulvinar efficitur, justo nibh fermentum neque, porta bibendum turpis tellus quis nibh.
        Nulla facilisi. Aenean mattis nulla turpis, vitae fermentum arcu ultricies ut.
        </pre>
    </div>
    <div className="about-us-left-second"><img className="grid-image" src="./Aboutus.jpg"></img></div>
    <div className="about-us-right">
      <h1>History</h1>
      <pre>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla metus mi, accumsan a finibus in, dictum nec lacus.
        Nulla ornare tempus pellentesque. Phasellus luctus nisl at tincidunt ornare. Nullam eu magna metus.
        Ut egestas odio sed risus placerat ornare. Fusce commodo felis quis augue eleifend dignissim.
        Praesent volutpat dignissim ante, ut tincidunt nibh egestas sed. Pellentesque hendrerit lacinia ligula, non aliquam neque semper quis.
        Fusce vulputate malesuada arcu eget sodales. Nullam ut vestibulum velit. Nam id tortor sollicitudin, feugiat elit et, malesuada orci.

        Praesent sapien lorem, bibendum et risus sit amet, consectetur lobortis sem. Praesent sed accumsan tellus, nec semper metus.
        Fusce nec dui ut justo elementum feugiat. In quis pulvinar enim, et pretium metus. Nulla gravida interdum orci, vel pretium tellus fringilla nec.
        In dignissim ligula ac ante scelerisque, quis vulputate lectus malesuada. Praesent vel leo tempor, varius diam in, sodales urna.
        Donec commodo orci dolor, at auctor mi auctor vel. Nam at leo nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae purus magna. Maecenas purus quam, porta non magna vitae, molestie porttitor urna.
        Sed viverra tellus in tincidunt interdum. Integer rutrum tellus id arcu ultricies placerat.</pre>  
    </div>
    <div className="about-us-right-first"><img className="grid-image" src="./Products.jpg"></img></div>
  </div>)
}

export default AboutUs;