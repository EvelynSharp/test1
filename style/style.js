import glamorous from 'glamorous';

export const Wrapper = glamorous.div({
  height: '100vh',
  minHeight: '350px',
  background: `linear-gradient(rgba(124, 37, 65, 1),rgba(0, 0, 0, 1))`,
  display: 'flex',
  flexFlow: 'column nowrap',
  alignContent: 'center',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Btn = glamorous.button({
  color: 'rgba(124, 37, 65, 1) !important',
  backgroundColor: 'transparent !important',
  border: '2px solid rgba(124, 37, 65, 1)!important',
  ':hover': {
    color: 'white !important',
    backgroundColor: 'rgba(124, 37, 65, 1) !important',
  },
})

export const HeaderStyle = {
  textAlign: 'center',
  fontFamily: 'Pacifico, cursive !important',
}
