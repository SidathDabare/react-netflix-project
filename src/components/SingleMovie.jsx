import { useState } from 'react'
import { Col, Button } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
//import CommentsList from './CommentsList'

const SingleMovie = ({ data, imdb }) => {
    const [selected, setSelected] = useState(false)
    const navigate = useNavigate()
    // state = {
    //     selected: false,
    //     comments: [],
    //     error: false,
    //     // newComment: {
    //     //     comment: '',
    //     //     rate: '3',
    //     //     elementId: this.props.data.imdbID,
    //     // },
    // }

    // fetchComments = async (movieID) => {
    //     const COMMENTS_URL = 'https://striveschool-api.herokuapp.com/api/comments/'
    //     try {
    //         const response = await fetch(COMMENTS_URL + movieID, {
    //             headers: {
    //                 Authorization:
    //                     'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjAyOTIxNzAwOTM4MjAwMTVkNjlkNGQiLCJpYXQiOjE2NTQwMDIzNTksImV4cCI6MTY1NTIxMTk1OX0.Az-VKL4DCsHqOMRsgI6JMGX4WTRG5BR3DAMEsMZdj6E',
    //             },
    //         })
    //         if (response.ok) {
    //             const comments = await response.json()
    //             this.setState({ error: false, comments })
    //         } else {
    //             console.log('an error occurred')
    //             this.setState({ error: true })
    //         }
    //     } catch (error) {
    //         console.log(error)
    //         this.setState({ error: true })
    //     }
    // }

    // submitComment = async (e) => {
    //     e.preventDefault()
    //     const COMMENTS_URL = 'https://striveschool-api.herokuapp.com/api/comments/'
    //     try {
    //         const response = await fetch(COMMENTS_URL, {
    //             method: 'POST',
    //             body: JSON.stringify(this.state.newComment),
    //             headers: {
    //                 Authorization:
    //                     'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjAyOTIxNzAwOTM4MjAwMTVkNjlkNGQiLCJpYXQiOjE2NTQwMDIzNTksImV4cCI6MTY1NTIxMTk1OX0.Az-VKL4DCsHqOMRsgI6JMGX4WTRG5BR3DAMEsMZdj6E',
    //                 'Content-Type': 'application/json',
    //             },
    //         })
    //         if (response.ok) {
    //             alert('Comment added')
    //             this.setState({
    //                 newComment: {
    //                     comment: '',
    //                     rate: 0,
    //                     elementId: this.props.data.imdbID,
    //                 },
    //             })
    //         } else {
    //             alert('An error has occurred')
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // handleRadioChange = (rating) => {
    //     let newComment = this.state.newComment
    //     newComment.rate = rating
    //     this.setState({ newComment })
    // }

    // handleCommentText = (e) => {
    //     let newComment = this.state.newComment
    //     newComment.comment = e.currentTarget.value
    //     this.setState({ newComment })
    // }


    return (
        <Col className="mb-2" key={imdb}>
            <img
                className="img-fluid"
                src={data.Poster}
                alt="movie"
                onClick={() => {
                    setSelected({ selected: !selected })
                    // this.fetchComments(this.props.data.imdbID)
                }}
            />
            <Button className='mt-2' onClick={() => navigate('/MovieDetails/' + imdb)}>MORE DETAILS</Button>
            {/* <Modal
                    show={this.state.selected}
                    onHide={() => this.setState({ selected: !this.state.selected })}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Movie comments</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="my-3">
                            {this.state.error && (
                                <Alert variant="danger" className="text-center">
                                    Error fetching comments
                                </Alert>
                            )}
                            {this.state.comments.length > 0 &&
                                this.state.comments[0].elementId === this.props.data.imdbID && (
                                    <CommentsList comments={this.state.comments} />
                                )}
                            <div className="text-center">
                                <h5 className="my-3">Add a comment</h5>
                                <Form onSubmit={this.submitComment}>
                                    <div className="my-3 text-center">
                                        <Form.Check
                                            inline
                                            label="1"
                                            value="1"
                                            type="radio"
                                            name="rating"
                                            defaultChecked={this.state.newComment.rate === '1'}
                                            onClick={() => this.handleRadioChange('1')}
                                        />
                                        <Form.Check
                                            inline
                                            label="2"
                                            value="2"
                                            type="radio"
                                            name="rating"
                                            defaultChecked={this.state.newComment.rate === '2'}
                                            onClick={() => this.handleRadioChange('2')}
                                        />
                                        <Form.Check
                                            inline
                                            label="3"
                                            value="3"
                                            type="radio"
                                            name="rating"
                                            defaultChecked={this.state.newComment.rate === '3'}
                                            onClick={() => this.handleRadioChange('3')}
                                        />
                                        <Form.Check
                                            inline
                                            label="4"
                                            value="4"
                                            type="radio"
                                            name="rating"
                                            defaultChecked={this.state.newComment.rate === '4'}
                                            onClick={() => this.handleRadioChange('4')}
                                        />
                                        <Form.Check
                                            inline
                                            label="5"
                                            value="5"
                                            type="radio"
                                            name="rating"
                                            defaultChecked={this.state.newComment.rate === '5'}
                                            onClick={() => this.handleRadioChange('5')}
                                        />
                                    </div>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            placeholder="Write your comment"
                                            aria-label="comment"
                                            aria-describedby="basic-addon1"
                                            onChange={this.handleCommentText}
                                            value={this.state.newComment.comment}
                                            required
                                        />
                                    </InputGroup>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal> */}
        </Col>
    )

}

export default SingleMovie
