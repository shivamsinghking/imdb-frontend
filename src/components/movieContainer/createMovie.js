import React, { useState, useEffect } from "react";
import Select from 'react-select'
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate  } from "react-router-dom";
import { getActorList } from "../../actions/actor";
import { getProducerList } from "../../actions/producer";
import { addNewMovie } from "../../actions/movies"
import { generateSelectOptionActor, validateForm } from '../../common/helper'

// const genders = [{ _id: 1, value: 'male', _name: 'Male' }, { _id: 2, value: 'female', _name: 'Female' }, { _id: 3, value: 'N/A', _name: 'Other than above' }]
const moviePlots = [{ _id: 1, value: 'thriller', label: 'Thriller' }, { _id: 2, value: 'romance', label: 'Romance' }]
const errObj = {
  name: { isValid: true, msg: "Name is Required" },
  plot: { isValid: true, msg: "Plot is Required" },
  casts: { isValid: true, msg: "Cast is Required" },
  year_of_release: { isValid: true, msg: "Year of Release is Required" },
  producer: { isValid: true, msg: "Producer is Required" }
}

const CreateMovie = () => {
  const { register, handleSubmit } = useForm();
  const [searchActor, setSearchActor] = useState();
  const [searchProducer, setSearchProducer] = useState()
  const [selectedPlots, setSelectedPlots] = useState([])
  const [selectedCasts, setSelectedCasts] = useState([])
  const [selectedProducer, setSelectedProducer] = useState([])
  const [formErrors, setFormErrors] = useState(errObj)

  // Redux - hooks
  const reduxMovie = useSelector(state => state.movies)
  const reduxActor = useSelector(state => state.actor)
  const reduxPrdoucer = useSelector(state => state.producer)
  const actors = reduxActor.actors
  const producers = reduxPrdoucer.producers
  const isLoading = reduxMovie.isLoading

  const dispatch = useDispatch()
  let navigate = useNavigate ();

  // get list of actors
  useEffect(() => {
    dispatch(getActorList())
    dispatch(getProducerList())
    /* eslint-disable */
  }, [])
  /* eslint-enable */

  // using searchActor to get actor list
  /* eslint-disable */
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      // Send Axios request for getting actor list
      if (searchActor) {
        dispatch(getActorList({ name: searchActor, isLimit: false }))
      }
    }, 1000)
    return () => clearTimeout(delayDebounceFn)
    //esline-disable-nextline
  }, [searchActor])

  // For producer
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      // Send Axios request for getting actor list
      if (searchProducer) {
        dispatch(getProducerList({ name: searchProducer, isLimit: false }))
      }
    }, 1000)
    return () => clearTimeout(delayDebounceFn)
  }, [searchProducer])
  /* eslint-enable */

  const handleOnChangePlot = (e) => {
    setSelectedPlots(Array.isArray(e) ? e.map(x => x.value) : [])
  }

  const handleOnChangeCasts = (e) => {
    setSelectedCasts(Array.isArray(e) ? e.map(x => {
      return { _id: x.id, actor_name: x.value }
    }) : [])
  }

  const handleOnChangeProducer = (e) => {
    setSelectedProducer({ _id: e.id, name: e.value })
  }
  const handleOnCreateActor = async (inputValue) => {
    // open a pop up to fill actor details...
    console.log(" InputeCreateActor ", inputValue)
  }

  // HINT: TO BE MADE... COMING SOON
  const handleOnCreateProducer = async (inputValue) => console.log("InputCreateProducer ", inputValue)

  const handleInputChangeSearchActor = (e) => setSearchActor(e);
  const handleInputChangeSearchProducer = (e) => setSearchProducer(e);

  const onSubmit = async (data) => {
    let updatedData = { ...data, plot: selectedPlots, casts: selectedCasts, producer: selectedProducer }
    let err = await validateForm(updatedData, formErrors)
    setFormErrors({ ...err })

    // HINT: Validation can be improved
    let isFormValid = true;
    Object.keys(err).map((d, k) => {
      if (err[d].isValid === false) {
        isFormValid = false;
      }
      return true;
    })

    if (isFormValid) {
      const res = await dispatch(addNewMovie(updatedData))
      if(res){
        navigate('/')
      }
    }
  }

  return (
    <div className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <form>
        <label>Movie Name</label>
        <input type="text" placeholder="Stan Lee"  {...register("name", { require: true })} />
        <p className="error-code">{!formErrors.name.isValid ? formErrors.name.msg : ''}</p>
        <label>Year of Release</label>
        <input type="date" {...register("year_of_release", { require: true })} />
        <p className="error-code">{!formErrors.year_of_release.isValid ? formErrors.year_of_release.msg : ''}</p>
        <label>Plot</label>
        <Select type="text"
          className="dropdown"
          placeholder=""
          options={moviePlots} // set list of the data
          onChange={handleOnChangePlot} // assign onChange function
          isMulti
          isClearable
        />
        <p className="error-code">{!formErrors.plot.isValid ? formErrors.plot.msg : ''}</p>
        <label>Casts</label>
        <Select type="text"
          className="dropdown"
          placeholder=""
          options={generateSelectOptionActor(actors)} // set list of the data
          onChange={handleOnChangeCasts} // assign onChange function
          onCreateOption={handleOnCreateActor}
          onInputChange={handleInputChangeSearchActor}
          isMulti
          isClearable
        />
        <p className="error-code">{!formErrors.casts.isValid ? formErrors.casts.msg : ''}</p>
        <label>Producer</label>
        <Select type="text"
          className="dropdown"
          placeholder=""
          options={generateSelectOptionActor(producers)} // set list of the data
          onCreateOption={handleOnCreateProducer}
          onChange={handleOnChangeProducer} // assign onChange function
          onInputChange={handleInputChangeSearchProducer}
          isClearable
        />
        <p className="error-code">{!formErrors.producer.isValid ? formErrors.producer.msg : ''}</p>
        <input type="submit" value={isLoading ? 'Creating...' : "Submit"}/>
      </form>
    </div>
  )
}

export default CreateMovie