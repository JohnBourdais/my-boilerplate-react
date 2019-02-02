import React, { Component } from 'react';

interface Props {
  titre: string;
}

interface State {
  readonly titre: string;
}

class Titre extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      titre: props.titre || 'Titre par default',
    };
  }

  render() {
    const { titre } = this.state;
    return (
      <div>
        <h1 className="titre-principal">{titre}</h1>
      </div>
    );
  }
}

export default Titre;
