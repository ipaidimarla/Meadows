import { BaseElement, html, css } from '../../core/base-element/base-element';
import { appStyles } from '../../styles/style'

const Images = require.context('../../assets/images', true, /\.jpeg$/)


export class AppGallery extends BaseElement {
    static get is() {
        return 'app-gallery';
    }
    constructor() {
        super();
        console.log("app gallery constructed");
    }
    static get styles() {
        return [appStyles, css``];
    }
    static get properties() {
        return {
            name: { type: String }
        }
    }

    render() {
        return html`
      
       
        
        <div class="container page-top" id='img-container'>
    
            <div class="row" id='img-row'>

                ${Images.keys().map((item) => html`
                <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                    <a href="images/${item.substring(2)}" class="fancybox" rel="ligthbox">
                        <img  src="images/${item.substring(1)}" class="zoom img-fluid "  alt="">
                        
                    </a>
                </div>
                `)}

            </div>
        </div>
         `;
    }
    firstUpdated() {
        
    }
    callBack() {
        this.requestUpdate();
    }
    loadImages(r){
        const path= 'images/'
        r.keys().forEach((f) => {
            f = path+f.substring(2);
            const div = document.createElement('div');
            div.classList.add('col-lg-3');
            div.classList.add('col-md-4')
            div.classList.add('col-xs-6')
            div.classList.add('thumb');
            const anchor = document.createElement('a');
            anchor.setAttribute('href', f);
            anchor.classList.add('fancybox');
            anchor.setAttribute('rel', 'ligthbox');
            const image = document.createElement('img');
            image.setAttribute('src', f);
            image.classList.add('zoom')
            image.classList.add('img-fluid');
            image.setAttribute('alt', 'image not found');
            anchor.appendChild(image);
            div.appendChild(anchor);
            this.shadowRoot.querySelector('#img-container').appendChild(div);
        });
        // $.ajax({
        //     url: "../assets/images",
        //     success: function(data){
        //        $(data).find("a:contains(.jpeg)").each(function(){
        //           // will loop through 
        //           let images = $(this).attr("href");
        //         images = images.substring(1);
        //           const div = document.createElement('div');
        //           div.classList.add('col-lg-3');
        //           div.classList.add('col-md-4')
        //           div.classList.add('col-xs-6')
        //           div.classList.add('thumb');
        //           const anchor = document.createElement('a');
        //           anchor.setAttribute('href', images);
        //           anchor.classList.add('fancybox');
        //           anchor.setAttribute('rel', 'ligthbox');
        //           const image = document.createElement('img');
        //           image.setAttribute('src', images);
        //           image.classList.add('zoom')
        //           image.classList.add('img-fluid');
        //           image.setAttribute('alt', 'image not found');
        //           anchor.appendChild(image);
        //           div.appendChild(anchor);
        //           document.querySelector('#img-row').appendChild(div);
          
        //        });
        //     }
        //   });
    }

}
if (!window.customElements.get(AppGallery.is)) {
    window.customElements.define(AppGallery.is, AppGallery);
}

