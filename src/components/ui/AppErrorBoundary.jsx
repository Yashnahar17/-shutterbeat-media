import { Component } from 'react'

export default class AppErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, message: '' }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, message: error?.message || 'Unknown render error' }
  }

  componentDidCatch(error, info) {
    console.error('App render error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-white flex items-center justify-center px-6">
          <div className="max-w-lg w-full rounded-card border border-tertiary bg-white p-8 text-center shadow-card">
            <h1 className="font-heading text-2xl text-primary mb-3">Rendering Error</h1>
            <p className="text-primary/70 font-body text-sm mb-3">
              Something failed while rendering the app. Refresh the page or restart the dev server.
            </p>
            <p className="text-primary/60 font-body text-xs break-words">{this.state.message}</p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
