/**
 * @author iWuzhi
 * @date 2020-12-20 17:50:09
 */

import * as React from 'react';
import { Button as MButton } from '@material-ui/core';

type Props = {};
type State = {};

class Button extends React.Component<Props, State> {
	render() {
		return (
			<MButton variant="contained" color="primary" disableElevation>
				Disable elevation
			</MButton>
		);
	}
}

export default Button;
