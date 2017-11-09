import React from 'react';
import { List } from 'semantic-ui-react';

const ReviewListItem = ({review, history}) => (
  <List.Item onClick={() => history.push(`/reviews/${review.id}`)} style={{ paddingLeft: '1.5rem !important'}} >
    <List.Icon size='large' style={{ color: 'rgba(124, 37, 65, 1)' }}>{review.rating}</List.Icon>
    <List.Content>
      <List.Header>{`Author: ${review.author}`}</List.Header>
      <List.Description>{`Date: ${review.publish_date.slice(0, 10)}`}</List.Description>
    </List.Content>
  </List.Item>
)

export default ReviewListItem;
