import React, { useEffect } from "react";
import "../../css/style.css";
import { puff_1 } from "../../../public/assets";

export default function Rain() {
  useEffect(() => {
    scrollTop();
  }, []);

  const scrollTop = () => {
    document.documentElement.scrollTop = 0;
  };
  return (
    <div className="product_content">
      <div className="product">
        <div className="product_image">
          <img src={puff_1} alt="product" />
        </div>
        <h1>PUFI RAIN</h1>
        <div className="product_description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt ultrices turpis, sed imperdiet nulla congue at. Quisque
            auctor justo sit amet arcu tristique, ac faucibus augue pharetra.
            Fusce in justo a turpis cursus tincidunt. Phasellus ornare arcu id
            dui malesuada, in vulputate eros convallis. Donec blandit, ligula
            eget luctus auctor, ipsum lectus lobortis arcu, sed aliquet mauris
            ligula et tellus. Sed ultrices metus sed rutrum venenatis. Vivamus
            pulvinar eros ut enim interdum, vel mattis elit pretium. Morbi
            luctus accumsan sodales. Sed id tempus purus, at pharetra erat. In
            vitae facilisis libero. Vestibulum molestie pulvinar libero, quis
            convallis ex finibus ut. Mauris ultricies sit amet lorem at
            convallis. Duis tempus egestas pharetra. In eu viverra purus, sed
            ornare sem. Fusce dignissim euismod efficitur. Etiam pharetra
            lacinia malesuada. Nunc sit amet augue fermentum, varius lacus nec,
            convallis mi. Aliquam aliquam sem nec lorem gravida condimentum.
            Duis eu nulla ipsum. In lacus risus, faucibus in volutpat ut,
            placerat sed odio. In quis tincidunt enim, feugiat euismod elit. Sed
            vulputate dui at condimentum viverra. Pellentesque bibendum commodo
            mauris vel posuere. Integer nunc lectus, blandit at enim vitae,
            semper gravida erat. Phasellus varius accumsan sapien, eget
            vestibulum arcu varius eget. Curabitur urna dolor, efficitur ut
            vehicula quis, volutpat ut justo. Cras scelerisque, ligula id
            ullamcorper egestas, libero orci efficitur massa, ac eleifend est
            felis a augue. Aliquam rhoncus lectus ut sapien bibendum euismod.
            Proin enim enim, sodales quis tellus nec, fringilla eleifend quam.
            Nulla facilisi. Donec sed neque augue. Maecenas feugiat ipsum non
            rhoncus tempor. Pellentesque ullamcorper tellus vitae ligula dictum,
            eu vehicula nunc pretium. Nullam ut dolor in metus cursus tristique.
            Curabitur condimentum faucibus nisl, a molestie ante laoreet
            porttitor. Sed semper ipsum vel posuere fermentum. Quisque
            condimentum tincidunt enim sed pulvinar. Integer id est eleifend,
            pharetra elit et, tincidunt tortor. Proin in magna sed elit ultrices
            rhoncus. Nullam ac rutrum ipsum. Ut ultrices pellentesque sem quis
            auctor. Ut eu varius dui. Sed at nisl est. Sed ligula ligula,
            pharetra vel erat vitae, aliquam consequat enim. Donec dictum felis
            et enim accumsan, non tristique tellus eleifend. Fusce semper
            lobortis quam, vitae lobortis purus vestibulum a. Phasellus id
            fermentum odio, vel laoreet tellus. Suspendisse et justo vel ante
            dapibus vestibulum. Suspendisse potenti. Quisque eu tempus tellus.
            Ut a lectus auctor, euismod ante eu, consectetur orci. Nulla mollis
            varius vestibulum. Nunc a massa efficitur, posuere velit a,
            ullamcorper ante. Vestibulum aliquam arcu velit, at fermentum neque
            convallis id. Integer dignissim neque non justo vulputate placerat.
            Mauris cursus vestibulum tempus. Fusce ante eros, aliquet bibendum
            dolor vel, maximus imperdiet lacus. Vivamus ultrices at elit nec
            dapibus.
          </p>
        </div>
      </div>
    </div>
  );
}
