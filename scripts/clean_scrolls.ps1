Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile("c:\Users\HARENDRA SINGH\Desktop\portfolio\public\scroll1and 2.png")

# Crop scroll 1 (x: 14 to 670, y: 14 to 750)
$rect1 = New-Object System.Drawing.Rectangle(14, 14, 656, 730)
$scroll1 = $src.Clone($rect1, $src.PixelFormat)
$scroll1.Save("c:\Users\HARENDRA SINGH\Desktop\portfolio\public\scroll1.png", [System.Drawing.Imaging.ImageFormat]::Png)
$scroll1.Dispose()

# Crop scroll 2 (x: 696 to 1352, y: 14 to 730)
$rect2 = New-Object System.Drawing.Rectangle(696, 14, 656, 730)
$scroll2 = $src.Clone($rect2, $src.PixelFormat)

# Remove the little watermark star in bottom right of scroll2 (approx x: 500 to 600, y: 580 to 680)
# Sample the background color from (500, 500)
$bgColor = $scroll2.GetPixel(500, 500)
$g = [System.Drawing.Graphics]::FromImage($scroll2)
$brush = New-Object System.Drawing.SolidBrush($bgColor)
$g.FillRectangle($brush, 480, 560, 160, 160)
$brush.Dispose()
$g.Dispose()

$scroll2.Save("c:\Users\HARENDRA SINGH\Desktop\portfolio\public\scroll2.png", [System.Drawing.Imaging.ImageFormat]::Png)
$scroll2.Dispose()

$src.Dispose()
Write-Host "Cleaned scroll1 and scroll2 with watermark removed"
