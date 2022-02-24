import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { apiCall } from "../services/api";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';

export const AddPets = () => {
    const [formFields, setFormFields] =
        useState({ name: "", description: "", age: "", category: "", city: "", size: "", breeds: "", sex: "" });
    const onFormFieldChange = (e) => {
        if (e.target.type == "file") {
            setFormFields({ ...formFields, [e.target.name]: e.target.files });
        } else {
            setFormFields({ ...formFields, [e.target.name]: e.target.value });
        }
        // console.dir(e)
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();

        const fileFields = ["image", "galeryImages"];
        const data = {};

        Object.keys(formFields).map(function (key, index) {
            if (fileFields.includes(key)) {

                console.log("odje file obraditi", formFields[key].length);
                if (formFields[key].length > 1) {
                    for (let i = 0; i < formFields[key].length; i++) {
                        const file = formFields[key][i];
                        formData.append(`files.${key}`, file, file.name);
                    }
                } else {
                    const file = formFields[key][0];
                    formData.append(`files.${key}`, file, file.name);
                }
            } else {
                console.log("odje tekst");
                data[key] = formFields[key];
            }
        });

        formData.append("data", JSON.stringify(data));
        console.log(formData, data, Array.from(formData));
        apiCall("/pets", { method: "POST", data: formData })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div className="add-pet-page">
            <div className='add-pet-header'><h1>Add Pet</h1></div>
            <Container>
                <Row>
                    <Col className='col-2 '></Col>
                    <Col className='add-pet-paper col-8'>
                        <form className="add-pet-form" onSubmit={onFormSubmit}>
                            <h2>Pet info:</h2>
                            <div>
                                <label htmlFor="name">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    required
                                    value={formFields.name}
                                    onChange={onFormFieldChange}
                                />

                                <select className="form-select" aria-label="select" name="category" required
                                    value={formFields.category}
                                    onChange={onFormFieldChange}>
                                    <option defaultValue>Select category</option>
                                    <option value="1">Dogs</option>
                                    <option value="2">Cats</option>
                                </select>




                                <label htmlFor="age">Age</label>
                                <input
                                    required
                                    id="age"
                                    type="number"
                                    name="age"
                                    value={formFields.age}
                                    onChange={onFormFieldChange}
                                />


                                <label htmlFor="description">Description</label>
                                <input
                                    required
                                    id="description"
                                    type="text"
                                    name="description"
                                    value={formFields.description}
                                    onChange={onFormFieldChange}
                                />


                                <label htmlFor="size">Size</label>
                                <input
                                    required
                                    id="size"
                                    type="text"
                                    name="size"
                                    value={formFields.size}
                                    onChange={onFormFieldChange}
                                />

                                <label htmlFor="breeds">Breeds</label>
                                <input
                                    required
                                    id="breeds"
                                    type="text"
                                    name="breeds"
                                    value={formFields.breeds}
                                    onChange={onFormFieldChange}
                                />

                                <label htmlFor="sex">Sex</label>
                                <input
                                    required
                                    id="sex"
                                    type="text"
                                    name="sex"
                                    value={formFields.sex}
                                    onChange={onFormFieldChange}
                                />

                                <label htmlFor="cover">Cover Image:</label>
                                <input id="cover" type="file" name="image" onChange={onFormFieldChange} />

                                <label htmlFor="galeryImages">Gallery Images:</label>
                                <input
                                    id="galeryImages"
                                    type="file"
                                    multiple
                                    name="galeryImages"
                                    onChange={onFormFieldChange}
                                />
                                <Button type="submit" variant="contained" color="primary">
                                    Add Pet
                                </Button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};