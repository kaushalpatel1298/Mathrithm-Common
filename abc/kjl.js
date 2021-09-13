/*In this, i have use inbulid function to sort the array. here array.sort is a inbulid function to sort array after that
a for loop is used to print the array  */







import java.util.Arrays;

public class Sorting {
  public static void main (String [] args) {
   int [] array = [45,12,42,1,6,8];
   Arrays.sort(array);
   for (int i = 0; i < array.length; i++) {
   System.out.println(array[i]);
   };
  }
}