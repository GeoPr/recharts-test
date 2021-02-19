import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LineChartComponent } from './LineChartComponent';
import { Sidebar } from './Sidebar/Sidebar';
import { BarChartComponent } from './BarChartComponent';
import { PieChartComponent } from './PieChartComponent';
import './App.scss';

const App = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <Switch>
        <Route exact path="/" component={LineChartComponent} />
        <Route exact path="/barChart" component={BarChartComponent} />
        <Route exact path="/pieChart" component={PieChartComponent} />
      </Switch>
    </div>
  );
};

export default App;
