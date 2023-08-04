import PropTypes from 'prop-types';
import { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * ErrorBoundary is a higher-order component that catches errors that occur in the components it wraps and displays a fallback UI instead of crashing the whole application.
 */
class ErrorBoundary extends Component {
  /**
   * propTypes define the expected props of the component.
   */
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = {
    /**
     * hasError indicates whether an error has been caught.
     */
    hasError: false,
  };

  /**
   * getDerivedStateFromError is a static method that returns an object to update the state when an error is caught.
   */
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  /**
   * componentDidCatch is a method that logs the error and its info to the console.
   * @param {Error} error - The caught error.
   * @param {Object} info - Additional information about the error.
   */
  componentDidCatch(error, info) {
    // Typically, we would log the error to an error reporting service like TrackJS or New Relic.
    console.error('ErrorBoundary caught an error', error, info);
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return (
        <h2>
          There was an error with this listing. <Link to="/">Click here</Link>{' '}
          to go back to the home page.
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
