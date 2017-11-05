import React from 'react';
import { List } from 'semantic-ui-react';

const ReviewListItem = ({review, history}) => (
  <List.Item
    key={review.id}
    onClick={() => history.push(`reviews/${review.id}`)}
  >
    <List.Icon size='large'>{review.rating}</List.Icon>
    <List.Content>
      <List.Header>{`Author: ${review.author}`}</List.Header>
      <List.Description>{`Date: ${review.publish_date.slice(0, 10)}`}</List.Description>
    </List.Content>
  </List.Item>
)

export default ReviewListItem;
