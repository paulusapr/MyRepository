import {
  useContext, useEffect, useState,
} from 'react';
import { Layout } from '../../components';
import { Context } from '../../redux/store';
import { getRepository } from '../../service/repository';

const RepositoryContainer = () => {
  const [loading, setLoading] = useState(true);
  const store = useContext(Context);
  const { list, setList } = store;

  const getData = async () => {
    const data = await getRepository('paulusapr');
    if (data?.data) {
      setList(data.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loading) getData();
  }, [loading]);

  return (
    <Layout>
      <div className="container">
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Repository Name</div>
            <div className="col col-2">Owner</div>
            <div className="col col-3">Link</div>
          </li>
          {!loading && list?.map((el) => (
            <li className="table-row" key={el.id}>
              <div className="col col-1" data-label="Repository Name">{el.name}</div>
              <div className="col col-2" data-label="Owner">{el.owner?.login}</div>
              <div className="col col-3" data-label="Link">
                <a href={el.html_url} target="_blank" rel="noreferrer">Link</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default RepositoryContainer;
