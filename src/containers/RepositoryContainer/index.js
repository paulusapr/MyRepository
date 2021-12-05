import {
  useContext, useEffect,
} from 'react';
import { Layout } from '../../components';
import { Context } from '../../redux/store';
import { getUsers } from '../../service/user';

const RepositoryContainer = () => {
//   const [loading, setLoading] = useState(true);
  const store = useContext(Context);
  const { state } = store;

//   const getData = async () => {
//     const data = await getUsers();
//     if (data?.data) {
//       setUser(data.data);
//       setLoading(false);
//     }
//   };

  useEffect(() => {
    // if (loading) getData();
  }, []);

  return (
    <Layout>
      <div className="container">
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Name</div>
            <div className="col col-2">Email</div>
            <div className="col col-3">Phone</div>
          </li>
          {!loading && state?.list?.map((el) => (
            <li className="table-row" key={el.id}>
              <div className="col col-1" data-label="Full Name">asfasf</div>
              <div className="col col-2" data-label="Email">asfasf</div>
              <div className="col col-3" data-label="Address">asfasf</div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default RepositoryContainer;
