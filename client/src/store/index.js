import { proxy } from "valtio";

const state= proxy({
 intro: true,
 color: "#EFBD48",
 isLogoTexture:true,
 isFullTexture:true,
 logoDecal: "./h_logo.png",
 fullDecal:"./background.png"

});

export default state;