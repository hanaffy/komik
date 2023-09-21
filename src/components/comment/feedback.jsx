import './feedbackStyle.css'
import '../style.css'

const Feedback = () => {
    return (
        <section className='feedback width'>
            <h4 className='feedback-for'>COMMENT</h4>
            <div className="feedback-wrapper">
                <div className="feedback-review">
                    <div className="feedback-review-total">
                        <h3>What do you think?</h3>
                        <p>232 Responses</p>
                    </div>
                    <div className="feedback-review-emotion">
                        <div className="feedback-review-vote">
                            <span className='feedback-review-emoji'>👍</span>
                            <h3>182</h3>
                            <p className='feedback-emoji-p'>Upvote</p>
                        </div>
                        <div className="feedback-review-vote">
                            <span className='feedback-review-emoji'>😂</span>
                            <h3>9</h3>
                            <p className='feedback-emoji-p'>Funny</p>
                        </div>
                        <div className="feedback-review-vote">
                            <span className='feedback-review-emoji'>😍</span>
                            <h3>24</h3>
                            <p className='feedback-emoji-p'>Love</p>
                        </div>
                        <div className="feedback-review-vote">
                            <span className='feedback-review-emoji'>😯</span>
                            <h3>3</h3>
                            <p className='feedback-emoji-p'>Surprised</p>
                        </div>
                        <div className="feedback-review-vote">
                            <span className='feedback-review-emoji'>😤</span>
                            <h3>7</h3>
                            <p className='feedback-emoji-p'>Angry</p>
                        </div>
                        <div className="feedback-review-vote">
                            <span className='feedback-review-emoji'>😥</span>
                            <h3>7</h3>
                            <p className='feedback-emoji-p'>Sad</p>
                        </div>
                    </div>
                    <div className="feedback-comment-total">
                        <h4 className='feedback-margin-right'>102 Comments</h4>
                        <h4>Login</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feedback;