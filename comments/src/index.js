import ReactDOM from 'react-dom';
import faker from 'faker';

import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <CommentDetail
                    author='Sam'
                    timeAgo='Today at 4:45 PM'
                    avatar={faker.image.avatar()}
                    comment='lorem ipsum sad diem'
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author='Alex'
                    timeAgo='Today at 2:00 AM'
                    avatar={faker.image.avatar()}
                    comment='lorem ipsum sad diem'
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author='Jane'
                    timeAgo='Yesterday at 4:45 PM'
                    avatar={faker.image.avatar()}
                    comment='lorem ipsum sad diem'
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

if (module.hot) {
    module.hot.accept();
}
