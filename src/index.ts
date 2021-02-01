import { CompositeLayer } from "@deck.gl/core"

class MyCompositeLayer<D> extends CompositeLayer<D, any> {
  renderLayers() {
    return [];
  }
}

MyCompositeLayer.layerName = "MyCompositeLayer";
MyCompositeLayer.defaultProps = {};

export default MyCompositeLayer;