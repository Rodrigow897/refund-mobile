import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4ECE9",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    width: '100%',
    height: 80,
    backgroundColor: '#E4ECE9',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 10,
    gap: 16,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerDown: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    justifyContent: 'space-between',
  },
  section: {
    height: 500,
    width: '95%',
    backgroundColor: '#F9FBFA',
    marginTop: 66,
    borderRadius: 8,
    padding: 16,
    gap: 12,
  },
  
});

export default styles;