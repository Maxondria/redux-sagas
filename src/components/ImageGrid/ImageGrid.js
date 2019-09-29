import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';
import Button from '../Button/Button';

import { loadImages } from '../../redux/actions';

class ImageGrid extends Component {
    componentDidMount() {
        this.props.loadImages();
    }

    render() {
        const { images, error, isLoading, loadImages } = this.props;
        return (
            <div className="content">
                <section className="grid">
                    {images.map(image => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}
                </section>
                {error && <div className="error">{JSON.stringify(error)}</div>}

                <Button
                    onClick={() => !isLoading && loadImages()}
                    loading={isLoading}
                />
            </div>
        );
    }
}

const mapStateToProps = ({ isLoading, error, images, nextPage }) => ({
    isLoading,
    images,
    error,
    nextPage,
});

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ImageGrid);
