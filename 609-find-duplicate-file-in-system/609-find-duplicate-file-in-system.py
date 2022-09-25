class Solution:
    def findDuplicate(self, paths: List[str]) -> List[List[str]]:
        "root/d1/d2/.../dm f1.txt(f1_content) f2.txt(f2_content) ... fn.txt(fn_content)"
        #we use. a hashmap and the ke is the file content
        #create a dict that takes a list as a pparameter
        c = defaultdict(list)
        #key content value(path name)
        #use a nested for loop and split it up to contents that matter
        for path in paths:
            path = path.split(" ")
            #folder is the first element in that array
            folder = path[0]
            for s in path[1:]:
                #s is the file path
                s = s.split(".txt")
                #the first element of the file path is the file name
                name = s[0]
                   #the second element of the file path is the content
                content = s[1]
                # create a hashmap using the content as the key, folder and name are values.
                c[content].append((folder, name))
        output = []
        # for key value in items of c
        for k,v in c.items():
 # if length of the list is greater than one which means duplicates are present
            if len(v)>1:
                tmp = []
                #for the path and name in value
                for path, name in v:
                    #add to temp the path/nameOfFile.txt
                    tmp.append(path+"/"+ name+".txt")
                    #add to your output tmp
                output.append(tmp)
         #output is our result       
        return output
                    
                    