import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { GetApp, Search, Add } from "@material-ui/icons";
import InputAdornment from "@material-ui/core/InputAdornment";

import { findAllUser, findUser } from "../../redux/actions";
import DatePicker from "react-multi-date-picker";
import Store from "../../redux/Store";

import CustomShowCustomer from "./CustomShowCustomer";
import {
  Card,
  FormControl,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Select,
} from "@material-ui/core";
import { customerManegmentStyles } from "../../styles/customerManagementStyle";
const CustomerManegment = () => {
  const [users, setUsers] = useState([]);
  const [searchBar, setSearchBar] = useState("");
  const usersData = findUser(users, searchBar);
  const history = useHistory();
  const classes = customerManegmentStyles();
  useEffect(() => {
    findAllUser();
    return () => {
      setUsers([]);
    };
  }, []);
  Store.subscribe(() => {
    const data = Store.getState().allUsers;
    setUsers(data);
  });

  return (
    <Grid container direction="column" spacing={2}>
      <Grid container item>
        <Grid item md={6} sm={12}>
          <Typography variant="subtitle1">مدیریت مشتریان</Typography>
          <Typography variant="subtitle2">مشتریان / مدیریت مشتریان</Typography>
        </Grid>
        <Grid item md={6} sm={12} className={classes.customDate}>
          <div className={classes.date}>
            <Typography variant="subtitle2">تا تاریخ</Typography>
            <DatePicker
              inputClass="datePicker"
              type="input-icon"
              locale="fa"
              calendar="persian"
            />
          </div>
          <div className={classes.date}>
            <Typography variant="subtitle2">از تاریخ</Typography>
            <DatePicker
              inputClass="datePicker"
              type="input-icon"
              locale="fa"
              calendar="persian"
            />
          </div>
        </Grid>
      </Grid>
      <Grid container item spacing={1}>
        {[1, 2, 3, 4].map((item) => (
          <Grid item md={3} sm={6} xs={12}>
            <Card className={classes.customerCard}></Card>
          </Grid>
        ))}
      </Grid>

      <Grid container item md={12} direction="row" justify="space-between">
        <Grid item>
          <Typography variant="subtitle1">مشتریان</Typography>
        </Grid>
        <Grid item>
          <Link href="ss">
            <GetApp color="primary" />
          </Link>
          <Link onClick={() => history.push("/customers/profile")}>
            <Add color="primary" />
          </Link>
        </Grid>
      </Grid>
      <Grid container item md direction="row" justify="space-between">
        <Grid item>
          <TextField
            variant="outlined"
            size="small"
            color="secondary"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            type="search"
            name="customer-search"
            className="searchBox"
            placeholder="نام و نام خانوداگی،شغل..."
            value={searchBar}
            onChange={(e) => {
              setSearchBar(e.target.value);
            }}
          />
        </Grid>
        <Grid item>
          <FormControl
            variant="outlined"
            size="small"
            className={classes.formControl}
          >
            <InputLabel id="userjobSearch">شغل</InputLabel>
            <Select
              color="secondary"
              labelId="userjobSearch"
              id="userjobSearch"
              onChange={(e) => {
                setSearchBar(e.target.value);
              }}
              label="شغل"
            >
              <MenuItem value="">برنامه نویس</MenuItem>
              <MenuItem value="">مکانیک</MenuItem>
              <MenuItem value="">آهنگر</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid item>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>شناسه</TableCell>
                <TableCell>نام مشتری</TableCell>
                <TableCell>شماره مشتری</TableCell>
                <TableCell>جنسیت</TableCell>
                <TableCell>شغل</TableCell>
                <TableCell>قیمت کل</TableCell>
                <TableCell>تاریخ</TableCell>
                <TableCell>تعداد سفارش</TableCell>
                <TableCell>مشاهده</TableCell>
              </TableRow>
            </TableHead>
            {usersData.map((user, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.mobile}</TableCell>
                  <TableCell>{user.gender}</TableCell>
                  <TableCell>{user.job}</TableCell>
                  <TableCell></TableCell>
                  <TableCell>{user.birthDay}</TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <CustomShowCustomer {...user} />
                  </TableCell>
                </TableRow>
              );
            })}
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default CustomerManegment;
