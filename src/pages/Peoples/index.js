import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Header from "../../components/Global/Header";
import PeoplesPage from "../../components/PeoplesPage";

import { getPeoples } from "../../redux/store/actions/peopleAction";

export default function Peoples() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPeoples());
  }, []);

  return (
    <div>
      <Header />
      <PeoplesPage />
    </div>
  );
}
