import React, {Component} from 'react';

class Likes extends Component {
    state = {
        like: localStorage.getItem('like') | 0,
}

nextLike = () => {
        this.setState(({ like }) => ({
            like: like + 1,
        }), () => localStorage.setItem('like', this.state.like));
}

    render() {
        const {like} = this.state;
        return (
            <>
                <button onClick={this.nextLike}>+</button>
                <h1>{like}</h1>
            </>
        );
    }
}

export default Likes;