/* eslint new-cap: "off" */

import React from 'react';
import cx from 'classnames';
import { Loading } from 'light-ui';
import GitHubCalendar from 'github-calendar';
import 'github-calendar/dist/github-calendar.css';
import styles from '../styles/github.css';


class Hotmap extends React.Component {
  constructor(props) {
    super(props);
    this.githubCalendar = false;
  }

  componentDidUpdate() {
    const { login } = this.props;
    if (!this.githubCalendar && login) {
      this.githubCalendar = true;
      $('#calendar') && GitHubCalendar('#calendar', login);
    }
  }

  render() {
    const { className } = this.props;
    return (
      <div id="calendar" className={cx(styles.github_calendar, className)}>
        <Loading loading />
      </div>
    );
  }
}

Hotmap.defaultProps = {
  className: ''
};

export default Hotmap;
