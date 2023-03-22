import {ImageURLSModel} from "./imageURLS.model";

export class MediasObjectModel {
  altText: string;
  variantsUrls: ImageURLSModel;

  constructor(altText: string = '', variantsUrls: ImageURLSModel = new ImageURLSModel()) {
    this.altText = altText;
    this.variantsUrls = variantsUrls;
  }
}
