import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#E3F1EC',
    padding: 10,
    borderRadius: 50,
    marginRight: 10,
  },
  name: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },
  category: {
    fontSize: 13,
    color: '#666',
  },
  value: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },
});

export default styles;