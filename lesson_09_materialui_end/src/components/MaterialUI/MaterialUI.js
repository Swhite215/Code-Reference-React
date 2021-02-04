import React from "react";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import CircularProgress from "@material-ui/core/CircularProgress";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

class MaterialUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Material UI",
    };
  }

  createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  render() {
    const rows = [
      this.createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
      this.createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
      this.createData("Eclair", 262, 16.0, 24, 6.0),
      this.createData("Cupcake", 305, 3.7, 67, 4.3),
      this.createData("Gingerbread", 356, 16.0, 49, 3.9),
    ];

    return (
      <div>
        {" "}
        <h2>{this.state.text}</h2>
        <br></br>
        <div>
          <Button variant="contained">Default</Button>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" disabled>
            Disabled
          </Button>
          <Button variant="contained" color="primary" href="#contained-buttons">
            Link
          </Button>
        </div>
        <br></br>
        <div>
          <Checkbox inputProps={{ "aria-label": "primary checkbox" }} />
          <Checkbox defaultChecked color="primary" inputProps={{ "aria-label": "secondary checkbox" }} />
          <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
          <Checkbox disabled inputProps={{ "aria-label": "disabled checkbox" }} />
          <Checkbox disabled checked inputProps={{ "aria-label": "disabled checked checkbox" }} />
          <Checkbox defaultChecked indeterminate inputProps={{ "aria-label": "indeterminate checkbox" }} />
          <Checkbox defaultChecked color="default" inputProps={{ "aria-label": "checkbox with default color" }} />
          <Checkbox defaultChecked size="small" inputProps={{ "aria-label": "checkbox with small size" }} />
        </div>
        <br></br>
        <div>
          <CircularProgress />
          <CircularProgress color="secondary" />
        </div>
        <br></br>
        <div>
          <Badge badgeContent={4} color="primary">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </div>
        <br></br>
        <div>
          <Timeline>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Eat</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Code</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>Sleep</TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
        <br></br>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default MaterialUI;
