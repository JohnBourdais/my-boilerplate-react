import React, { Component } from 'react';

interface Props {
  source: string;
  alt?: string;
}

interface State {
  source: string;
  alt: string;
}

class Image extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      source: props.source || '',
      alt: props.alt || '',
    };
  }

  render() {
    const { source, alt } = this.state;
    return (
      <div>
        <img src={source} alt={alt} />
      </div>
    );
  }
}

export default Image;
