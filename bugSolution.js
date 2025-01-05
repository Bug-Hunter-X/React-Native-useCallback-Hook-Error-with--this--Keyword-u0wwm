import React, { useState, useCallback } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <View>
      <Text>{count}</Text>
      <Button title="Increment" onPress={increment} />
    </View>
  );
}

export default MyComponent;

//Or with the use of a ref
import React, { useState, useCallback, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const componentRef = useRef(null);

  const increment = useCallback(() => {
    if (componentRef.current) {
      componentRef.current.setState({ count: componentRef.current.state.count + 1 });
    }
  }, []);

  return (
    <View>
      <Text>{count}</Text>
      <Button title="Increment" onPress={increment} />
    </View>
  );
}

export default MyComponent;