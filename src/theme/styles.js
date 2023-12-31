import { mode } from '@chakra-ui/theme-tools';

export const globalStyles = {
	colors: {
		gray: {
			700: '#1f2733'
		},
		orange: {
			700: '#1f2733'
		},
		black: {
			700: '#000000'
		}
	},
	styles: {
		global: (props) => ({
			body: {
				bg: mode('gray.50', 'gray.800')(props),
				fontFamily: "'Roboto', sans-serif"
			},
			html: {
				fontFamily: "'Roboto', sans-serif"
			}
		})
	}
};
