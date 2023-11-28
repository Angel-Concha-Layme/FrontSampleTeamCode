const r=`public class MergeSort {\r
\r
    // Método principal para ordenar el arreglo\r
    public static void sort(int[] array) {\r
        if (array.length < 2) {\r
            return;\r
        }\r
\r
        int mid = array.length / 2;\r
        int[] left = new int[mid];\r
        int[] right = new int[array.length - mid];\r
\r
        for (int i = 0; i < mid; i++) {\r
            left[i] = array[i];\r
        }\r
        for (int i = mid; i < array.length; i++) {\r
            right[i - mid] = array[i];\r
        }\r
\r
        sort(left);\r
        sort(right);\r
\r
        merge(array, left, right);\r
    }\r
\r
    // Método para combinar dos subarreglos\r
    public static void merge(int[] array, int[] left, int[] right) {\r
        int i = 0, j = 0, k = 0;\r
\r
        while (i < left.length && j < right.length) {\r
            if (left[i] <= right[j]) {\r
                array[k++] = left[i++];\r
            } else {\r
                array[k++] = right[j++];\r
            }\r
        }\r
\r
        while (i < left.length) {\r
            array[k++] = left[i++];\r
        }\r
\r
        while (j < right.length) {\r
            array[k++] = right[j++];\r
        }\r
\r
        // Impresión del arreglo después de cada combinación\r
        System.out.println("Array después de combinar: " + arrayToString(array));\r
    }\r
\r
    // Método auxiliar para imprimir el arreglo\r
    public static String arrayToString(int[] array) {\r
        StringBuilder builder = new StringBuilder();\r
        builder.append("[");\r
        for (int i = 0; i < array.length; i++) {\r
            builder.append(array[i]);\r
            if (i < array.length - 1) {\r
                builder.append(", ");\r
            }\r
        }\r
        builder.append("]");\r
        return builder.toString();\r
    }\r
\r
    // Método para probar el algoritmo de ordenamiento\r
    public static void main(String[] args) {\r
        int[] array = {12, 11, 13, 5, 6, 7};\r
        System.out.println("Array original: " + arrayToString(array));\r
        sort(array);\r
        System.out.println("Array ordenado: " + arrayToString(array));\r
    }\r
}\r
`;export{r as default};
