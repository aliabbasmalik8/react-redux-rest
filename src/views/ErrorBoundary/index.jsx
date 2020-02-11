import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch() {
    this.setState({ appError: true });
  }

  render() {
    const { appError } = this.state;
    const { children } = this.props;
    return appError ? <h2>We apologize, something went wrong</h2> : children;
  }
}

export default ErrorBoundary;
