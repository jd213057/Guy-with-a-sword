import * as PIXI from "pixi.js";
import React from 'react';
class Screen extends React.Component {
    constructor(props) {
      super(props); 
      this.pixi_cnt = null;
      this.loader = new PIXI.Loader();
      this.app = new PIXI.Application({width: 600, height: 600, transparent:true, backgroundColor:  '#FF0000'})  };
      
      updatePixiCnt= (element) => {
      // the element is the DOM object that we will use as container to add pixi stage(canvas)
      this.pixi_cnt = element;    //now we are adding the application to the DOM element which we got from the Ref.
      if(this.pixi_cnt && this.pixi_cnt.children.length<=0) {
         this.pixi_cnt.appendChild(this.app.view);       //The setup function is a custom function that we created to add the sprites. We will this below
         this.setup();
      } };

      setup = () => {
        this.loader
             .add("avatar",'../assets/Warrior/Animations/Jump/Jump__000.png')
             .load(this.initialize);
     };
     initialize = () => {
         //We will create a sprite and then add it to stage and (0,0) position
         this.avatar = new PIXI.Sprite(this.loader.resources["avatar"].texture);
         this.app.stage.addChild(this.avatar);
     
     };
    
  render() {
      return <div ref={this.updatePixiCnt} />;
    }
  }

  export default Screen;