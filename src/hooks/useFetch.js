import { useState } from "react";

/**
 * @param baseUrl
 * @returns {{post: (function(*, *): Promise<unknown>), get: (function(*): Promise<unknown>), loading: boolean, put: (function(*, *): Promise<unknown>)}}
 * @example import useFetch from "./useFetch.js";
 *
 * //Example
 * export default function MyComponent() {
 *   const [products, setProducts] = useState([]);
 *   const { get, loading } = useFetch(
 *     "https://react-tutorial-demo.firebaseio.com/"
 *   );
 *
 *   useEffect(() => {
 *     get("products.json") // HÄR HÄMTAR MAN 'GET' FRÅN 'useFetch.js'
 *       .then((data) => setProducts(data))
 *       .catch((error) => console.log(error));
 *   }, []);
 *
 *   return (
 *     <div className="store-front">
 *       {loading && <Loader />}
 *       {products.map((product) => (
 *         <Product key={product.id} details={product} />
 *       ))}
 *     </div>
 *   );
 * }
 */
export default function useFetch(baseUrl) {
  const [loading, setLoading] = useState(true);

  function get(url) {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + url, {
        method: "get",
        mode: 'cors',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        }
      })
        .then((response) => response.json())
        .then((data) => {
          if (!data) {
            setLoading(false);
            return reject(data);
          }
          setLoading(false);
          resolve(data);
        })
        .catch((error) => {
          setLoading(false);
          reject(error);
        });
    });
  }

  function post(url, body) {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + url, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((data) => {
          if (!data) {
            setLoading(false);
            return reject(data);
          }
          setLoading(false);
          resolve(data);
        })
        .catch((error) => {
          setLoading(false);
          reject(error);
        });
    });
  }

  function put(url) {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + url, {
        method: "put",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((data) => {
          if (!data) {
            setLoading(false);
            return reject(data);
          }
          setLoading(false);
          resolve(data);
        })
        .catch((error) => {
          setLoading(false);
          reject(error);
        });
    });
  }

  return { get, post, put, loading };
}
