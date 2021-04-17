import React, {useState} from 'react'
import { forwardRef } from 'react';
import MaterialTable from 'material-table'
import Edit from '@material-ui/icons/Edit';
import Check from '@material-ui/icons/Check';
import Clear from '@material-ui/icons/Clear';
import AddBox from '@material-ui/icons/AddBox';
import Remove from '@material-ui/icons/Remove';
import Search from '@material-ui/icons/Search';
import SaveAlt from '@material-ui/icons/SaveAlt';
import LastPage from '@material-ui/icons/LastPage';
import TextField from '@material-ui/core/TextField';
import FirstPage from '@material-ui/icons/FirstPage';
import ViewColumn from '@material-ui/icons/ViewColumn'
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import FilterList from '@material-ui/icons/FilterList';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ChevronRight from '@material-ui/icons/ChevronRight';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import axios from 'axios'
import {withRouter} from 'react-router-dom'

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;


const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
];

function OneDetailPanel() {

    const [checkboxData, setCheckboxData] = useState([])
    console.log(checkboxData)
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
            { title: 'Mahsulot', field: 'product', width:40},
            { title: 'Malumot', field: 'inform', width:10},
            { title: 'Narx', field: 'cost',width:10 },
            { title: 'Kategoriya', field: 'category',width:10},
            { title: 'Rasm', field: 'imageUrl', render: rowData => <img src={rowData.imageUrl} alt="asd"/> },
            
        ]
    );
    const [data, setData] = useState([
      { product: 'Mehmet', inform: 'Baran', cost: 1987, category: 998993455214, imageUrl:'https://picsum.photos/200/100'},
      { product: 'Mehmet', inform: 'Baran', cost: 1987, category: 998993455214, imageUrl:'https://picsum.photos/200/120'},
      { product: 'Mehmet', inform: 'Baran', cost: 1987, category: 998993455214, imageUrl:'https://picsum.photos/200/100'},
      { product: 'Mehmet', inform: 'Baran', cost: 1987, category: 998993455214, imageUrl:'https://picsum.photos/200/100'},
    ]);
  
    return (
      <>
        <Autocomplete
          id="combo-box-demo"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          style={{ width: '48%', margin:'10px auto' }}
          renderInput={(params) => <TextField {...params} label="Kategoriya bo'yicha tartiblash" variant="outlined" />}
        />

        <MaterialTable
          title="One Detail Panel Preview"
          icons={tableIcons}
          options={{exportButton: true}}
          title="Tugagan mahsulotlar"
          columns={columns}
          data={data}
        />
      </>
    )
}
export default withRouter(OneDetailPanel)

