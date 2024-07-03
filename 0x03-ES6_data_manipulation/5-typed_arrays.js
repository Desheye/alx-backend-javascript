function createInt8TypedArray(length, position, value) {
  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);
  // Create an Int8Array view of the buffer
  const int8Array = new Int8Array(buffer);
  // Check if the position is within the range of the array
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  // Set the value at the specified position
  int8Array[position] = value;
  // Return the underlying ArrayBuffer
  return buffer;
}

export default createInt8TypedArray;
