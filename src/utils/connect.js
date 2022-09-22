import { PureComponent } from "react";
import store from "../store";

export function connect(mapStateToProps, mapDispatchToProps) {
  return function enhanceHOC(WrappedComponent) {
    return class extends PureComponent {
      constructor(props) {
        super(props);
        this.state = {
          counter: store.getState(),
        };
      }
      componentDidMount() {
        store.subscribe(() => {
          this.setState({
            counter: store.getState(),
          });
        });
      }
      render() {
        return (
          <WrappedComponent
            {...this.props}
            {...mapStateToProps(store.getState())}
            {...mapDispatchToProps(store.dispatch)}
          />
        );
      }
    };
  };
}
