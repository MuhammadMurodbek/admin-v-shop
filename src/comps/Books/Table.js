import React,{useState} from 'react'
import { forwardRef } from 'react';
import MaterialTable from 'material-table'
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Button from '@material-ui/core/Button';
import Check from '@material-ui/icons/Check';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50; 
  const left = 50; 

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export function Editable(){
  const [rowData, setRowData] = useState({})
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = (data) => {
    setOpen(true);
    setRowData(data);
    console.log(data);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
        <h3>Ismi: {rowData.name}</h3>
        <h3>Tel raqami: {rowData.phone}</h3>
        <h3>Sana: {rowData.data}</h3>
        <hr/>
        <h3>Xabar: {rowData.more}</h3>
    </div>
  );
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
  const handleClick = (data) => {
    console.log(data)
  }
  const data = [
    {name:'Murodbek', phone:'9981234567', data:'12/12/12 | 12:45', more:'Tezda junatilsin'},
    {name:'Murodbek', phone:'9981234567', data:'12/12/12 | 12:45', more:'Tezda junatilsin'},
    {name:'Azizbek', phone:'9981234567', data:'12/12/12 | 12:45', more:'Tezda junatilsin'},
    {name:'Murodbek', phone:'9981234567', data:'12/12/12 | 12:45', more:'Tezda junatilsin'},
    {name:'Murodbek', phone:'9981234567', data:'12/12/12 | 12:45', more:'Tezda junatilsin'},
    {name:'Murodbek', phone:'9981234567', data:'12/12/12 | 12:45', more:'Tezda junatilsin'},
  ]
  const column = [
    {title:'Haridor', field:'name'},
    {title:'Tel raqam', field:'phone'},
    {title:'Sana/Vaqt', field:'data'},
    {
      title: "Batafsil...",
      field: "more",
      editable: false,
      render: (rowData) =>
          rowData && (
          <Button color="primary"  onClick={()=>handleOpen(rowData)} >Batafsil...</Button>
      )
    },
    {
      title: "Bajarildi",
      field: "done",
      editable: false,
      render: (rowData) =>
          rowData && (
          <Button color="primary" variant="contained" onClick={()=>handleClick(rowData)}><CheckCircleOutlineIcon/>Bajarildi</Button>
      )
    }
  ]
  return(
    <div className="table-data">
      <MaterialTable
        title="Buyurtmalar"
        icons={tableIcons}
        data={data}
        columns={column}
        responsive={true}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  )
}