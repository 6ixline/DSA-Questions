
public class Main{
    public static void sort012(int A[], int n)
    {
        // code here pointer Based
         int low = 0, mid = 0, high = n -1;
       
       while(mid <= high){
           
           if(A[mid] == 0){
               int temp = A[low];
               A[low] = A[mid];
               A[mid] = temp;
               
               mid++;
               low++;
           }else if(A[mid] == 1){
               mid++;
           }else{
               int temp = A[high];
               A[high] = A[mid];
               A[mid] = temp;
               high--;
               
           }
       
        
    }
    // Using Count
    // public static void sort012(int A[], int n)
    // {
    //     // code here
    //     int czero = 0;
    //     int cone = 0;
    //     int ctwo = 0;
        
    //     for(int i = 0; i < n; i++){
    //         if(A[i] == 0){
    //             czero++;
    //         }   
    //         if(A[i] == 1){
    //             cone++;
    //         }
    //         if(A[i] == 2){
    //             ctwo++;
    //         }
    //     }
    //     int i = 0;
    //     while(czero > 0){
    //         A[i] = 0;
    //         czero--;
    //         i++;
    //     }
    //     while(cone > 0){
    //         A[i] = 1;
    //         cone--;
    //         i++;
    //     }
    //     while(ctwo > 0){
    //         A[i] = 2;
    //         ctwo--;
    //         i++;
    //     }
        
    // }
    public static void main(String []args){
        int []A = [0, 1, 1, 2, 1];
        sort012(A, 5);
    }
}