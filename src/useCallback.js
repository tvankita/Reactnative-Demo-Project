import React, { useState, useCallback } from 'react'
import { Button, SafeAreaView, Text } from 'react-native'

const UseCallbackDemo = () => {
	const [age, setAge] = useState(25)
	const [salary, setSalary] = useState(50000)
	
	const increment = useCallback(() => {
		setAge(age + 1);
	  }, [age]);
	const incrementSalary = useCallback(() => {
		setSalary(salary + 1000)
	  }, [salary]);

	  return (
		<SafeAreaView>
		<Title> <h2>useCallback Hook</h2> </Title>
		  <Text>Age: {age}</Text>
		  <Text>SetSalary: {setSalary}</Text>
		  <Button onPress={increment}>Increment Age</Button>
		  <Button onPress={incrementSalary}>Increment Salary</Button>
		</SafeAreaView>
	  );
	};

export default UseCallbackDemo;