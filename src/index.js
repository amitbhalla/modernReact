import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className='ui container comments'>
            <CommentDetail
                author='Sam'
                timeAgo='Today at 4:45 PM'
                avatar={faker.image.avatar()}
                comment='lorem ipsum sad diem'
            />
            <CommentDetail
                author='Alex'
                timeAgo='Today at 2:00 AM'
                avatar={faker.image.avatar()}
                comment='lorem ipsum sad diem'
            />
            <CommentDetail
                author='Jane'
                timeAgo='Yesterday at 4:45 PM'
                avatar={faker.image.avatar()}
                comment='lorem ipsum sad diem'
            />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

if (module.hot) {
    module.hot.accept();
}
