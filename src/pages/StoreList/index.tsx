import React from 'react';
import StoreListTemplate from '@templates/StoreListTemplate';
import { STORE_FILTERS } from '@constants/store';
import { useParams } from 'react-router-dom';
import { STORE_LIST_TITLE, STORE_TOPIC } from '@constants/index';

type Keys = keyof typeof STORE_TOPIC;

function Search() {
  const params = useParams();

  const [title, setTitle] = React.useState<string>('');
  const [topic, setTopic] = React.useState<typeof STORE_TOPIC[Keys] | undefined>('');
  React.useEffect(() => {
    if (params) {
      const paramsTopic = params.topic;
      setTopic(paramsTopic);
      console.log(params);
    }
  }, [params, params.topic]);
  React.useEffect(() => {
    if (topic === STORE_TOPIC.ARROUND) {
      setTitle(STORE_LIST_TITLE.ARROUND);
    }
    if (topic === STORE_TOPIC.POINT) {
      setTitle(STORE_LIST_TITLE.POINT);
    }
    if (topic === STORE_TOPIC.BOOKMARK) {
      setTitle(STORE_LIST_TITLE.BOOKMARK);
    }
  }, [topic]);
  return <StoreListTemplate topic={topic} title={title} filters={STORE_FILTERS} />;
}

export default Search;
