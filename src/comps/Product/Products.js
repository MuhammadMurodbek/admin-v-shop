import React, { useState } from 'react'
import { forwardRef } from 'react';
import UploadImage from './UploadImg';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import MaterialTable from 'material-table';
import Edit from '@material-ui/icons/Edit';
import Clear from '@material-ui/icons/Clear';
import Check from '@material-ui/icons/Check';
import Button from '@material-ui/core/Button';
import AddBox from '@material-ui/icons/AddBox';
import Search from '@material-ui/icons/Search';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Collapse from '@material-ui/core/Collapse';
import ListItem from '@material-ui/core/ListItem';
import LastPage from '@material-ui/icons/LastPage';
import TextField from '@material-ui/core/TextField';
import FirstPage from '@material-ui/icons/FirstPage';
import FilterList from '@material-ui/icons/FilterList';
import ViewColumn from '@material-ui/icons/ViewColumn';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import IconButton from "@material-ui/core/IconButton";
import FixedTags from './Dropdown'
import { withRouter } from 'react-router-dom'

const Products = () => {
    const [openAdd, setOpenAdd] = useState(false);
    const [rowDataInfo, setRowDataInfo] = useState({})

    const handleClickAdd = () => {
        setOpenAdd(!openAdd);
    }

    const [open, setOpen] = useState(false);
    const handleClick = (rowData) => {
        console.log(rowData)
        setRowDataInfo(rowData)
        setOpen(!open);
    }

    const productInfo = {
        name: 'Mahsulotlar'
    }
    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
    ]
    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
    };

    const [columns, setColumns] = useState(
        [
            { title: 'Mahsulot', field: 'product', width: '30%' },
            { title: 'Malumot', field: 'inform', width: '20%' },
            { title: 'Narx', field: 'cost', type: 'numeric', width: '10%' },
            { title: 'Kategoriya', field: 'category', width: '30%' },
            { title: 'Rasm', field: 'imageUrl', render: rowData => <img src={rowData.imageUrl} alt="asd" /> },
            {
                title: "Custom Add",
                field: "internal_action",
                width: '10%',
                editable: false,
                render: (rowData) =>
                    rowData && (
                        <IconButton
                            color="secondary"
                            onClick={() => handleClick(rowData)}
                        >
                            <Edit />
                        </IconButton>
                    )

            },
        ]
    );
    const [data, setData] = useState([
        { product: 'Mehmet', inform: 'Baran', cost: 1987, category: 998993455214, imageUrl: 'https://picsum.photos/200/100' },
        { product: 'Mehmet', inform: 'Baran', cost: 1987, category: 998993455214, imageUrl: 'https://picsum.photos/200/100' },
        { product: 'Mehmet', inform: 'Baran', cost: 1987, category: 998993455214, imageUrl: 'https://picsum.photos/200/100' },
        { product: 'Mehmet', inform: 'Baran', cost: 1987, category: 998993455214, imageUrl: 'https://picsum.photos/200/100' },

    ]);
    const defaultProps = {
        options: top100Films,
        getOptionLabel: (option) => option.title,
    };

    const flatProps = {
        options: top100Films.map((option) => option.title),
    };

    const [value, setValue] = React.useState(null);

    return (
        <div className="admin-product">
            <div>
                <ListItem button onClick={handleClickAdd}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Mahsulot qo'shish" />
                    {openAdd ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openAdd} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem >
                            <div className="admin-product-edit">
                                <Card className="admin-product-edit-add">
                                    <div>
                                        <TextField className="textInput" label="Product" />
                                        <TextField className="textInput" label="Ma'lumot" />
                                        <TextField className="textInput" label="Narx" />
                                        <Autocomplete
                                            {...defaultProps}
                                            id="clear-on-escape"
                                            clearOnEscape
                                            className="textInput"
                                            renderInput={(params) => <TextField {...params} label="Kategoriya" margin="normal" />}
                                        />
                                        <Button
                                            className="btn-admin-add"
                                            variant="contained"
                                            color="primary"
                                        >
                                            Add
                                        </Button>
                                    </div>
                                    <div>
                                        <span className="admin-add-img">
                                            <UploadImage />
                                        </span>

                                    </div>
                                </Card>
                            </div>
                        </ListItem>
                    </List>
                </Collapse>
            </div>
            <div>
                <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Mahsulotni yangilash" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem>
                            <div className="admin-product-edit">
                                <Card className="admin-product-edit-add">
                                    <div>
                                        <TextField
                                            className="textInput"
                                            placeholder={rowDataInfo.product}
                                            label="Product"
                                        />
                                        <TextField
                                            className="textInput"
                                            placeholder={rowDataInfo.inform}
                                            label="Ma'lumot"
                                        />
                                        <TextField
                                            className="textInput"
                                            placeholder={rowDataInfo.cost}
                                            label="Narx"
                                        />
                                        <TextField
                                            className="textInput"
                                            placeholder={rowDataInfo.category}
                                            label="Kategoriya"
                                        />
                                        <Button
                                            className="btn-admin-add"
                                            variant="contained"
                                            color="primary"
                                        >
                                            Yangilash
                                        </Button>
                                    </div>
                                    <div>
                                        <span className="admin-add-img">
                                            {/* <UploadImage/> */}
                                            <img src={`${rowDataInfo.imageUrl}`} alt={rowDataInfo.inform} />
                                        </span>

                                    </div>
                                </Card>
                            </div>
                        </ListItem>
                    </List>
                </Collapse>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <Card className="card" style={{ width: "48%", padding: "20px", textAlign: "center" }}>
                    <h2>Kategoriya bo'yicha tartiblash</h2>
                </Card>
                <FixedTags />
            </div>
            <MaterialTable
                title={productInfo.name}
                columns={columns}
                data={data}
                icons={tableIcons}
                options={{ exportButton: true }}
                responsive={true}
                editable={{

                    onRowDelete: oldData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const dataDelete = [...data];
                                const index = oldData.tableData.id;
                                dataDelete.splice(index, 1);
                                setData([...dataDelete]);

                                resolve()
                            }, 1000)
                        }),
                }}
            />
        </div>
    )
}

export default withRouter(Products)
