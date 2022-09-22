import { PureComponent } from "react";
// import store from "../store";
import { StoreContext } from "./context.js";

export function connect(mapStateToProps, mapDispatchToProps) {
  return function enhanceHOC(WrappedComponent) {
    class EnhanceComponent extends PureComponent {
      constructor(props, context) {
        super(props, context);
        this.state = {
          // counter: store.getState(),
          storeState: mapStateToProps(context.getState()),
        };
      }
      componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(context.getState()),
          });
        });
      }

      // componentWillUnmount() {
      //   this.unsubscribe();
      // }
      render() {
        return (
          <WrappedComponent
            {...this.props}
            {...mapStateToProps(this.context.getState())}
            {...mapDispatchToProps(this.context.dispatch)}
          />
        );
      }
    }
    EnhanceComponent.contextType = StoreContext;
    return EnhanceComponent;
  };
}
