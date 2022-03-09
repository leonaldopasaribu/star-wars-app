import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getPeopleDetail } from "../../redux/store/actions/peopleAction";

const PeopleDetailPage = () => {
  const dispatch = useDispatch();
  const people = useSelector((state) => state.people);

  const { peopleId } = useParams();

  useEffect(() => {
    dispatch(getPeopleDetail(peopleId));
  }, []);

  return (
    <div className="container">
      <p>Name : {people.peopleDetail.name}</p>
      <p>Height :{people.peopleDetail.height}</p>
      <p>Mass : {people.peopleDetail.mass}</p>
      <p>Birth Date : {people.peopleDetail.birth_year}</p>
    </div>
  );
};

export default PeopleDetailPage;
