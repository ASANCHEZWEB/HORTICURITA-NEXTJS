import { useRouter } from "next/router";
import React from "react";

const Comment = () => {
  const router = useRouter();
  const { productDetail } = router.query;

  return (
    <>
      <h1>Producto url: {productDetail}</h1>
    </>
  );
};
export default Comment;
