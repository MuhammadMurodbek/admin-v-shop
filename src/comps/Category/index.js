import React from 'react'
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import CategoryImgUpload from './CategoryImgUpload';
import Button from '@material-ui/core/Button';
import ListCategory from './ListCategory';
const index = () => {
    return (
        <div className="add-category">
            <Card className="add-category-card">
                <form action="post">
                    <span>
                        <TextField 
                            name="name" 
                            className="card-input"
                            placeholder="Kategoriya nomini kiriting"
                        />
                        <Button 
                            type="submit" 
                            className="btn-category"
                            color="primary" 
                            variant="contained"
                            >
                            Kategoriya qo'shish
                        </Button>   
                    </span>
                        <CategoryImgUpload/>
                </form>
            </Card>
            <ListCategory/>
        </div>
    )
}

export default index
